import { useEffect, useState } from 'react'
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Modal from '../components/Modal';
import { instance } from '../api';
import { createPropertyStart, createPropertyFailure, createPropertySuccess } from '../redux/properties/singlePropertySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FloatingNotification from '../components/FloatingNotification';

export default function PostPropertyPage() {
    const [formData, setFormData] = useState({});
    const [categories, setCategories] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const { loading, error } = useSelector((state) => state.property);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        instance.get('/categories').then((response) => {
            setCategories(response.data);
        }).catch((error) => {
            console.log(error.response.data.message);
        });
    }, []);


    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPropertyStart());

        const completeFormData = {...formData, user_id: currentUser.user.id};
        try {
            const response = await instance.post('/listings', completeFormData);
            dispatch(createPropertySuccess(response.data));
            console.log(response.data);
            navigate('/');
        } catch (error) {
            dispatch(createPropertyFailure(error.response.data.message));
            console.log(error.response.data.message);
        }
    }

    const handleSubmitted = () => {
        setHasSubmitted(true);
    }

  return (
    <div className='font-poppins w-full px-10 flex flex-col gap-2 align-middle justify-center'>
        {/* <Modal
            title='Review'
            content={
                <>
                <p>
                    Are you sure you want to place this property for review?
                </p>
                <button onClick={handleSubmitted} className='bg-blue-950 text-white p-2 rounded-md'>Yes</button>
                <button onClick={() => setModalIsOpen(false)} className='bg-red-500 text-white p-2 rounded-md'>No</button>
                </>

            }
            isVisible={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
        /> */}
        <FloatingNotification myinfo='Property has been submitted for review' icon={<CheckCircleIcon className='size-12 text-green-500' />} />
        <h1 className='text-3xl text-center font-ams underline p-2'>Post Property</h1>
        <form onSubmit={handleSubmit} encType='multipart/form-data' className='flex justify-center align-middle flex-col gap-4 w-1/2'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='text-2xl'>Title</label>
                <input type='text' name='title' onChange={handleChange} id='title' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Title here...'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='image' className=' text-2xl'>Image</label>
                <input type='file' name='image' onChange={handleChange} id='image' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' accept='image/jpeg, image/png, image/jpg' />
            </div>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='category' className='text-2xl'>Category</label>
                    <select name='category' onChange={handleChange} id='category' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none'>
                        <option value=''>Select Category</option>
                        {categories.map((category) => (
                            <option key={category.category_id} value={category.category_id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='price' className=' text-2xl'>Price</label>
                    <input type='number' name='price' onChange={handleChange} id='price' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='How much is a unit'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='description' className=' text-2xl'>Description</label>
                <textarea name='description' onChange={handleChange} id='description' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Description...'></textarea>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='price' className=' text-2xl'>Features</label>
                <textarea name='features' onChange={handleChange} id='features' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Features here'></textarea>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='location' className=' text-2xl'>Location</label>
                <input type='text' name='location' onChange={handleChange} id='location' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Where is it?'/>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-blue-950 text-white p-2 rounded-md'onClick={() => setModalIsOpen(true)} >Place for review</button>
            </div>
        </form>
    </div>
  )
}
