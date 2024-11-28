// import React from 'react'
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import { instance } from '../api';
import { useSelector } from 'react-redux';

export default function CategoryPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [categories, setCategories] = useState([]);
    const { currentUser } = useSelector((state) => state.user);


    useEffect(() => {
        const fetchCategories = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${currentUser.access_token}`
                }
            }
            try {
                const response = await instance.get('/categories', config);
                setCategories(response.data);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchCategories();
    }, [currentUser]);

    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
    }

    const handleSubmit = async (e) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.access_token}`
            }
        }

        e.preventDefault();
        try {
            await instance.post('/categories', formData, config);
            fetchCategories();
            hideModal();
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const fetchCategories = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.access_token}`
            }
        }
        try {
            const response = await instance.get('/categories', config);
            setCategories(response.data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }



    const showModal = () => {
        setModalIsOpen(true);
    }
    const hideModal = () => {
        setModalIsOpen(false);
    }
  return (
    <div>
        <div className="flex flex-row w-full justify-between">
            <h1 className="font-ams underline text-2xl text-center p-2">
                Categories
            </h1>
            {/* <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600" onClick={showModal}>
                Add Category
            </button> */}

            <button
                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20"
                onClick={showModal}
            >
                <span className="text-lg">Add Category</span>
                <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                >
                    <div className="relative h-full w-10 bg-white/30"></div>
                </div>
                </button>

            <Modal
                title='Add Category'
                content={
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <input type="text" className="p-2 border border-none rounded-md bg-slate-200 focus:outline-none" placeholder="Category Name" onChange={handleChange} id="name"/>
                        <textarea className="p-2 border border-none rounded-md bg-slate-200 focus:outline-none" placeholder="Description" onChange={handleChange} id="description"></textarea>
                        <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">Add Category</button>
                    </form>
                }
                isVisible={modalIsOpen}
                onClose={hideModal}
            />
        </div>
        <div>
            <table className="w-full border-collapse border rounded-3xl border-gray-300 shadow-lg">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-4 border border-gray-300">ID</th>
                        <th className="p-4 border border-gray-300">Name</th>
                        <th className="p-4 border border-gray-300">Description</th>
                        <th className='p-4 border border-gray-300'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id} className="hover:bg-gray-100">
                            <td className="p-4 border border-gray-300">{category.category_id}</td>
                            <td className="p-4 border border-gray-300">{category.name}</td>
                            <td className="p-4 border border-gray-300">{category.description}</td>
                            <td className="p-4 border border-gray-300">
                                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Edit</button>
                                <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
