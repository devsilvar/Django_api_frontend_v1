import { useState } from 'react';
import ViewTodo from '../components/ViewTodo';
import Todolist from '../components/Todolist';
import plus from '../../public/plus.svg';
import CreateTodo from '../components/CreateTodo';

const Todopage = () => {
  const [Datas, setDatas] = useState([]);
  return (
    <>
      <section className=''>
        <ViewTodo />
        <CreateTodo storeData={setDatas} data={Datas} />
        <Todolist data={Datas} />
        <button
          type='button'
          className='btn btn-primary rounded-circle p-2 position-fixed bottom-0 end-0 m-5 '
          data-bs-toggle='modal'
          data-bs-target='#staticBackdrop'
        >
          <img src={plus} alt='' />
        </button>
      </section>
    </>
  );
};
export default Todopage;
