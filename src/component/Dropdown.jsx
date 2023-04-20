import React from 'react';

function Dropdown(props) {

    const onTitleChange = (e, id) => {
        const updateSchema = props.schema.map(data => {
            if (data.id === id) {
                return { ...data, title: e.target.value };
            }
            return data;
        });
        props.setSchema(updateSchema);
    }

    const deleteSchema = (id) => {
        const updateSchema = props.schema.filter(data => data.id !== id)
        props.setSchema(updateSchema);
        console.log("deleting schema in dropdown : ", props.schema);
    }

    const selectOption = () => {

    }


    return (
        <div>
            {props.schema && props.schema.map((data) => {
                return (
                    <div className='flex justify-between group p-4 border border-b-gray-400' key={data.id}>
                        <div className='flex'>
                            <p className='mr-2 text-gray-500'>{data.id}.</p>
                            <input
                                type={data.type}
                                value={data.title}
                                onChange={(e) => onTitleChange(e, data.id)}
                                className="border-none bg-gray-200" name="" />
                            <form >
                                <select name="" id="" onSelect={() => selectOption()}>
                                    <option value="string">string</option>
                                    <option value="number">number</option>
                                    <option value="boolean">boolean</option>
                                    <option value="object">object</option>
                                </select>
                            </form>
                        </div>
                        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="flex">
                                <label class="relative inline-flex items-center cursor-pointer mr-4">
                                    <input type="checkbox" value={data.required} onChange={() => props.toggleRadioButton(data.id)} class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    {/* <span class="ml-3 text-sm font-medium text-gray-900">Required</span> */}
                                </label>

                                <div onClick={() => deleteSchema(data.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            )}
        </div>
    )
}

export default Dropdown;
