//items table
import React from 'react';
import { createRoot } from 'react-dom/client'
import DataTable from 'react-data-table-component';

const table = createRoot(document.getElementById('items_table')); 
function show_table()
{
    const items_data = JSON.parse(JSON.stringify(items.replace(/&quot;/g,'"')));
    table.render(items_data);
    
}


const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function MyComponent() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};