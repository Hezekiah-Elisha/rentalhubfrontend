import { useSelector } from 'react-redux'
import moment from 'moment'

function getMembershipDuration(created_at) {
  const now = moment();
  const createdAt = moment(created_at);
  const diffYears = now.diff(createdAt, 'years');
  const diffMonths = now.diff(createdAt, 'months');
  const diffDays = now.diff(createdAt, 'days');
  const diffHours = now.diff(createdAt, 'hours');

  if (diffYears > 0) {
      return `${diffYears} year(s)`;
  } else if (diffMonths > 0) {
      return `${diffMonths} month(s)`;
  } else if (diffDays > 0) {
      return `${diffDays} day(s)`;
  } else {
      return `${diffHours} hour(s)`;
  }
}

export default function ProfilePage() {
  const {currentUser} = useSelector((state) => state.user)

  const user = currentUser.user

  return (
    <div className='font-poppins w-full p-5'>
      <div className=' border p-5 w-full rounded-lg bg-slate-100 text-blue-950 shadow-lg'>
        <div className='flex flex-row w-full align-middle justify-between items-center'>
          <h2 className='text-3xl font-bold capitalize'>{user.name}</h2>
          <p className='text-lg text-green-400'> Member for {getMembershipDuration(user.created_at)}</p>
        </div>
        <p className='text-lg'>{user.email} <span className='bg-green-400 rounded-full px-2'>{user.role}</span> </p>
      </div>
    </div>
  )
}
