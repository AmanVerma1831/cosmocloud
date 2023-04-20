import React, { useState } from 'react'
import Dropdown from './Dropdown';

function Hero() {

    const [schema, setSchema] = useState([
        {
            id: 1,
            type: "string",
            title: "person",
            value: "",
            required: false
        },
        {
            id: 2,
            type: "string",
            title: "order",
            value: "",
            required: false
        },
        {
            id: 3,
            type: "string",
            title: "class",
            value: "",
            required: false
        },
        {
            id: 4,
            type: "string",
            title: "general",
            value: "",
            required: false
        }
    ]);

    const addSchema = () => {
        //create a new unique id
        let newId;
        if (schema.length === 0) {
            newId = 1;
        } else {
            newId = Math.max(...schema.map(data => data.id)) + 1;
        }
        console.log("neww Id : ", newId);
        //new schema
        const newSchema = {
            id: newId,
            type: "string",
            title: "title",
            value: "",
            required: false
        };
        setSchema([...schema, newSchema]);
        // console.log("new id schema", schema);
    }

    const toggleRadioButton = (id) => {
        let newSchema = schema;
        let updatingDataIndex = newSchema.findIndex((data) => data.id === id);
        let updatingData = newSchema[updatingDataIndex];
        updatingData.required = !updatingData.required;
        newSchema[updatingDataIndex] = updatingData;
        setSchema(newSchema);
    }

    return (
        <div className='flex justify-center items-center border-2 border-gray-600 rounded-md'>
            <div className='p-4 bg-gray-100 rounded-md min-w-[50vw] min-h-[50vh] m-8'>
                <div className='flex justify-between mb-4'>
                    <h1 className='font-bold text-gray-500'>Field name a type</h1>
                    <p onClick={addSchema} className='font-bold cursor-pointer'>+</p>
                </div>
                <div>
                    <Dropdown schema={schema} setSchema={setSchema} toggleRadioButton={toggleRadioButton} />
                </div>
            </div>
        </div>
    )
}

export default Hero;
