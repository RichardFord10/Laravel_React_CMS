//items table
import React from 'react';
import { useState } from "react";
import { createRoot } from 'react-dom/client'
import DataTable, { createTheme } from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import styled, { css } from 'styled-components'
import 'react-data-table-component-extensions/dist/index.css';


if(typeof items !== 'undefined')
{

    const root = createRoot(document.getElementById('root')); 
    const items_data = JSON.parse(items.replace(/&quot;/g,'"'));
    var data = [];
    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,

        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
            
        },
        {
            name: 'Brand',
            selector: row => row.brand,
            sortable: true,
            
        },
        {
            name: 'Category',
            selector: row => row.color,
            sortable: true,
            
        },
    ];
    
    for(let x = 0; x < items_data.length; x++){
        data.push(
            { 
                id: items_data[x].id,
                name: items_data[x].name,
                category: items_data[x].category,
                brand: items_data[x].brand,
                color: items_data[x].color
            }
            
            ) 
        };
        
        createTheme('solarized', {
            text: {
                primary: '#268bd2',
                secondary: '#2aa198',
            },
            background: {
                default: '#002b36',
            },
            context: {
                background: '#cb4b16',
                text: '#FFFFFF',
            },
            divider: {
                default: '#073642',
            },
            action: {
                button: 'rgba(0,0,0,.54)',
                hover: 'rgba(0,0,0,.08)',
                disabled: 'rgba(0,0,0,.12)',
            },
        }, 'dark');
        
        
        
    function ItemsTable() {
        return (
            <DataTableExtensions
              columns={columns}
              data={data}
              print={false}
              export={false}
              filter={true}
            >
            <DataTable
            
            columns={columns}
            data={data}
            theme="dark"
            pagination
            selectableRows
            
            
            />
            </DataTableExtensions>

            );
        };
        //render items table
        root.render(ItemsTable())
        
        
    }

    //start charts
    export default function App() {
        const [chartData, setChartData] = useState({
          labels: Data.map((data) => data.color), 
          datasets: [
            {
              label: "Users Gained ",
              data: Data.map((data) => data.userGain),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ],
              borderColor: "black",
              borderWidth: 2
            }
          ]
        });
      
        return (
          <div className="App">
            <p>Using Chart.js in React</p>
          </div>
        );
      }






