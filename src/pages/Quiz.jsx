import React, { useState } from 'react';
import { FaRegLightbulb } from "react-icons/fa6";
import BiologicalTextFormatter from '../utils/formatter';










// https://api.jsonserve.com/Uw5CrX
const Quiz = () => {
    const [View, setView] = useState(false);
    const [Click, setClick] = useState(false);
    const [Value, setValue] = useState('');

    const handleCheckAnswer = () => {
        setView(true); // Set to true to show the answer section
        if (Value === "5'AAAU3'") { // Correct answer
            setClick(true);
        } else {
            setClick(false);
        }
    };

    return (
        <div className='w-full h-dvh p-10 bg-zinc-800 text-white'>
            <section className='flex justify-center flex-col items-center gap-4 text-balance'>
                <h1 className='text-4xl font-mono font-semibold'>Answer all the Questions</h1>
                <p className='text-xl'>The Molecular Basis of Inheritance</p>
            </section>

            <section className='flex flex-col mt-20'>
                <div className='question flex gap-3'>
                    <p>1 .</p>
                    <p>If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is :</p>
                </div>

                <div className='options flex flex-col gap-3 mt-4 pl-4'>
                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id='13379' value="5'UUUU3'" onChange={(e) => { setValue(e.target.value) }} />
                        <label htmlFor="13379">5'UUUU3'</label>
                    </div>

                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id='13380' value="3'UUUU5'" onChange={(e) => { setValue(e.target.value) }} />
                        <label htmlFor="13380">3'UUUU5'</label>
                    </div>

                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id='13381' value="5'AAAU3'" onChange={(e) => { setValue(e.target.value) }} />
                        <label htmlFor="13381">5'AAAU3'</label>
                    </div>

                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id='13382' value="3'AAAU5'" onChange={(e) => { setValue(e.target.value) }} />
                        <label htmlFor="13382">3'AAAU5'</label>
                    </div>
                </div>

                <div className='button mt-4 pl-2'>
                    <button className='bg-blue-600 p-1.5 rounded-xl' onClick={handleCheckAnswer}>Check Answer</button>
                </div>

                {View && (
                    <div className='answer'>
                        {Click ? (
                            <>
                                <p className='text-emerald-200 mt-3'>Correct answer</p>
                                <p className='w-6xl mt-4 p-4 bg-slate-700 text-balance rounded-2xl'>
                                    <div className='mb-2 text-emerald-500 font-semibold text-2xl flex gap-1.5'>
                                        <FaRegLightbulb className='text-xl mt-1.5' /> <h1>Answer</h1>
                                    </div>
                                    <code>
                                        <BiologicalTextFormatter text={`5'AAAU3'`} />
                                    </code>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className='text-red-300 mt-3'>Wrong Answer</p>
                                <p className='w-6xl mt-4 p-4 bg-slate-700 text-balance rounded-2xl'>
                                    <div className='mb-2 text-emerald-500 font-semibold text-2xl flex gap-1.5'>
                                        <FaRegLightbulb className='text-xl mt-1.5' /> <h1>Answer</h1>
                                    </div>
                                    <code>
                                        <BiologicalTextFormatter text={`5'AAAU3'`} />
                                    </code>
                                </p>
                            </>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Quiz;
