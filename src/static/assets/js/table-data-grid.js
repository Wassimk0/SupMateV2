// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0




import flatpickr from "flatpickr";
import DataTable from "datatables.net-dt";
import { handleSelectAll, handleRowCheckboxChange, handleDeleteRow, removeCheckedRows, updateCustomInfo, updateSelectInfo } from './common/datatable';

const tab = '#filterDataTableMain';
const tableId = '#filterDataTable';
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

    // Init Pagination controls
    customLength.addEventListener('change', function () { table.page.len(this.value).draw() }
    );
    document.querySelector(`${tab} #custom_prev`).addEventListener('click', () => table.page('previous').draw('page'));
    document.querySelector(`${tab} #custom_next`).addEventListener('click', () => table.page('next').draw('page'));

    // Handle custom filters
    document.querySelector('#filterDataTableMain #name_filter').addEventListener('keyup', function () { table.column(1).search(this.value).draw(); });
    document.querySelector('#filterDataTableMain #position_filter').addEventListener('change', function () { table.column(2).search(this.value === 'all' ? '' : this.value).draw(); });
    document.querySelector('#filterDataTableMain #team_filter').addEventListener('keyup', function () { table.column(3).search(this.value).draw(); });
    document.querySelector('#filterDataTableMain #email_filter').addEventListener('keyup', function () { table.column(5).search(this.value).draw(); });
    document.querySelector('#filterDataTableMain #address_filter').addEventListener('change', function () { table.column(6).search(this.value === 'all' ? '' : this.value).draw(); });
    document.querySelector('#filterDataTableMain #status_filter').addEventListener('change', function () { table.column(7).search(this.value === 'all' ? '' : this.value).draw(); });

    // Initialize Flatpickr for date filtering
    flatpickr("#filterDataTableMain #todo-datepicker", {
        enableTime: false,
        dateFormat: "m-d-Y",
        onChange: function (selectedDates, dateStr) {
            let formattedDate = dateStr.split('-').reverse().join('-'); // Convert to YYYY-MM-DD
            table.column(4).search(formattedDate).draw(); // Apply date filter
        }
    });
}); 