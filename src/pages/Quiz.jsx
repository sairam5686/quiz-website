import React from 'react'
import { FaRegLightbulb } from "react-icons/fa6";
import BiologicalTextFormatter from '../utils/formatter';

// https://api.jsonserve.com/Uw5CrX
const Quiz = () => {
  return (
    <div className='w-full h-fit p-10 bg-zinc-800 text-white'>
        <section className='flex justify-center flex-col items-center gap-4 text-balance'>
            <h1 className='text-4xl font-mono font-semibold' >Answer all the Questions</h1>
            <p className='text-xl'>The Molecular Basis of Inheritance</p>
        </section>
            
            <section className='flex flex-col  mt-20'>
                <div className='question flex gap-3'>
                    <p>1 .</p>
                    <p>If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is :</p>
                </div>


                <div className='options flex flex-col gap-3 mt-4 pl-4'>
                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id='13379' />
                        <label htmlFor="13379">5'UUUU3'</label>
                    </div>

                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id=' 13380' />
                        <label htmlFor=" 13380">3'UUUU5'</label>
                    </div>

                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id='13381' />
                        <label htmlFor="13381">5'AAAU3'</label>
                    </div>

                    <div className='flex gap-x-1.5'>
                        <input type="radio" name='3342' id='13382' />
                        <label htmlFor="13382">3'AAAU5'</label>
                    </div>
                </div>


                <div className='button mt-4 pl-2'>
                    <button className='bg-blue-600 p-1.5 rounded-xl'>Check Answer</button>
                </div>


                <div className='answer'>
                    <p className='w-lg mt-4 p-4 bg-slate-700 text-balance rounded-2xl' >
                        <div className='mb-2 text-emerald-500 font-semibold text-2xl flex gap-1.5 '><FaRegLightbulb className='text-xl mt-1.5' /> <h1>Answer</h1></div>
                        <code>
                            <BiologicalTextFormatter text={`To determine the mRNA sequence from the given DNA sequence, we follow the principles of transcription, where RNA is synthesized complementary to the DNA template strand. Here's the step-by-step process:\r\n\r\nGiven DNA Sequence:\r\n5\r\n′\r\n \r\n𝐴\r\n𝐴\r\n𝐴\r\n𝑇\r\n \r\n3\r\n′\r\n5 \r\n′\r\n AAAT3 \r\n′\r\n \r\nTranscription Rules:\r\nComplementary Base Pairing:\r\n\r\nAdenine (A) in DNA pairs with Uracil (U) in RNA.\r\nThymine (T) in DNA pairs with Adenine (A) in RNA.\r\nCytosine (C) pairs with Guanine (G), and vice versa.\r\nRNA is synthesized in the 5' to 3' direction, complementary to the 3' to 5' DNA template strand.\r\n\r\nDNA Template Strand:\r\nTo determine the template strand, we first identify the complementary strand of the given DNA sequence. The template strand is:\r\n\r\n3\r\n′\r\n \r\n𝑇\r\n𝑇\r\n𝑇\r\n𝐴\r\n \r\n5\r\n′\r\n3 \r\n′\r\n TTTA5 \r\n′\r\n \r\nmRNA Sequence:\r\nThe mRNA is transcribed from the template strand using complementary base pairing:\r\n\r\n5\r\n′\r\n \r\n𝐴\r\n𝐴\r\n𝐴\r\n𝑈\r\n \r\n3\r\n′\r\n5 \r\n′\r\n AAAU3 \r\n′\r\n \r\nFinal Answer:\r\nThe base sequence in mRNA is: 5' AAAU 3'.`} />
                        </code>
                    </p>
                </div>

            </section>

    </div>
  )
}

export default Quiz 