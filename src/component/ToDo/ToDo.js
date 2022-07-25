
import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const ToDo = () => {
    const [itemsText, setItemsText] = useState('');
    const [items, setItems] = useState([]);


    // fetch data from database
    useEffect(() => {
        const getListItems = async () => {
            try {
                const res = await axios.get('http://localhost:5000/items')
                setItems(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getListItems();
    }, [items]);

    // delete items 

    const deleteItems = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/items/${id}`);
            const newItems = items.filter(item => item._id !== id);
            setItems(newItems);

        } catch (err) {
            console.log(err);
        }
    }


    //    create function for post data 
    const addItems = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/items', { items: itemsText });
            console.log(res);
            setItemsText('');
        }
        catch (err) {
            console.log(err);

        }
    }
    return (
        <section className='mt-20'>
            <div
                style={{ margin: '0 auto' }}
                className='w-96 shadow-white shadow-sm '>
                <h1 className='text-center text-4xl text-white font-bold pt-10'> TO Do Items List </h1>
                <form onSubmit={e => addItems(e)} className='flex flex-col mt-10'>
                    <input onChange={e => { setItemsText(e.target.value) }} value={itemsText} type="text" name="text" id="1" placeholder='Add to-do items' className='input input-bordered  w-96' />
                    <input className='btn btn-primary mt-5' type="submit" value="Add" />
                </form>
                <div className='mt-5 flex flex-col gap-5 pb-5'>
                    {
                        items?.map(item =>
                            <div className='flex justify-evenly'>
                                <p className='text-secondary text-xl font-bold'> {item.items} </p>
                                <div>
                                    <button onClick={() => deleteItems(item._id)} className='btn btn-error'>X</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ToDo;