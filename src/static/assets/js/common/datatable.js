// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import DataTable from "datatables.net-dt";

// Handle "Select All" checkbox
export function handleSelectAll(dataTable, tableId) {

    const isChecked = this.checked;
    const rows = dataTable.rows({ page: 'current' }).nodes();
    Array.from(rows).forEach(row => {
        const checkbox = row.querySelector('input.row-checkbox');
        checkbox.checked = isChecked;
        row.classList.toggle('selected', isChecked);
    });
    updateSelectInfo(dataTable, tableId);
}

// Handle individual row checkbox changes
export function handleRowCheckboxChange(event, dataTable, tableId) {
    if (event.target.classList.contains('row-checkbox')) {
        const row = event.target.closest('tr');
        if (event.target.checked) {
            row.classList.add('selected');
        } else {
            row.classList.remove('selected');
        }
        updateSelectInfo(dataTable, tableId);
    }
}

// Handle dropdown menu click to delete selected rows
export function handleDeleteRow(event, dataTable, tableId) {
    event.preventDefault();
    const row = event.target.closest('tr');
    if (row) {
        dataTable.row(row).remove().draw(false);
        updateSelectInfo(dataTable, tableId);
    }
}

// Handle deletion of checked rows
export function removeCheckedRows(dataTable, tableId) {
    const checkedRows = document.querySelectorAll('.row-checkbox:checked');
    checkedRows.forEach(checkbox => {
        const row = checkbox.closest('tr');
        dataTable.row(row).remove().draw(false);
    });
    updateSelectInfo(dataTable, tableId);
}

// Update custom info display
export function updateCustomInfo(dataTable, tableId) {
    const info = dataTable.page.info();
    if (info) {
        document.querySelector(`${tableId} #custom_info`).textContent = `${info.start + 1}-${info.end} of ${info.recordsTotal}`;
        document.querySelector(`${tableId} #custom_prev`).disabled = info.page === 0;
        document.querySelector(`${tableId} #custom_next`).disabled = info.page >= info.pages - 1;
    }
}

// Update selection info and toggle visibility of delete section
export function updateSelectInfo(dataTable, tableId) {
    const selectedCount = document.querySelectorAll(`${tableId} .row-checkbox:checked`).length;
    const customSelectInfo = document.querySelector(`${tableId} #custom_select_info`);
    const mainDeleteSelected = document.querySelector(`${tableId} .main_delete_selected`);
    const selectAllCheckbox = document.querySelector(`${tableId} #select_all`);
    const totalCheckboxes = dataTable.rows({ page: 'current' }).nodes().filter(row => row.querySelector('input.row-checkbox')).length;
    if (customSelectInfo) {
        customSelectInfo.textContent = `${selectedCount} selected`;
        customSelectInfo.style.display = selectedCount > 0 ? 'block' : 'none';
    }
    if (mainDeleteSelected) mainDeleteSelected.style.display = selectedCount > 0 ? 'block' : 'none';
    if (selectAllCheckbox) selectAllCheckbox.checked = selectedCount === totalCheckboxes;
}