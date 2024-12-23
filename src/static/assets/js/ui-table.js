// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0


import DataTable from "datatables.net-dt";
import { handleSelectAll, handleRowCheckboxChange, handleDeleteRow, removeCheckedRows, updateCustomInfo, updateSelectInfo } from './common/datatable';

const tab = '#sorting_selecting_main';
const tableId = '#sorting_selecting';
let table = null;
const tableOptions = {
    columnDefs: [
        { orderable: false, className: 'select-checkbox', targets: 0 },
        { orderable: false, targets: [] } // Adjust as needed
    ],
    select: { style: 'multi', selector: 'td:first-child input.row-checkbox' },
    order: [], // Clear default sorting
    lengthMenu: [5, 10, 25],
    pageLength: 5,
    dom: 'rt' // Only table and pagination controls
};

document.addEventListener('DOMContentLoaded', function () {
    // Initialize DataTable
    const tableContainer = document.querySelector(`${tab} ${tableId}`);
    const customLength = document.querySelector(`${tab} #custom_length`);

    table = new DataTable(tableContainer, tableOptions);
    table.on('draw', () => updateCustomInfo(table, tab));
    updateCustomInfo(table, tab);

    // Init Handle SelectAll input
    const selectAllCheckbox = document.querySelector(`${tab} #select_all`);
    selectAllCheckbox.addEventListener('change', () => handleSelectAll.call(selectAllCheckbox, table, tab));

    // Init Handle Row Checkbox Change
    document.querySelector(`${tab}`).addEventListener('change', (event) => handleRowCheckboxChange(event, table, tab));

    // Init Handle Delete Row


    tableContainer.querySelectorAll('.delete_selected').forEach(deleteButton => {
        deleteButton.addEventListener('click', (event) => handleDeleteRow(event, table, tab));
    });

    // Init Handle Main Delete Selected
    document.querySelector(`${tab} .main_delete_selected .delete_selected`).addEventListener('click', (event) => {
        event.preventDefault();
        removeCheckedRows(table, tab);
    });

    // Init Pagination controls
    customLength.addEventListener('change', function () { table.page.len(this.value).draw() }
    );
    document.querySelector(`${tab} #custom_prev`).addEventListener('click', () => table.page('previous').draw('page'));
    document.querySelector(`${tab} #custom_next`).addEventListener('click', () => table.page('next').draw('page'));
}); 