// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import DataTable from "datatables.net-dt";

$(document.getElementById('user_list_table_tabs-22')).ready(function () {
    // Initialize DataTable
    let table = $('#user_list_table_tabs-22 #userExample').DataTable({
        columnDefs: [
            { orderable: false, className: 'select-checkbox', targets: 0 },
            { orderable: false, targets: [] } // Adjust as needed
        ],
        select: { style: 'multi', selector: 'td:first-child input.row-checkbox' },
        order: [], // Clear default sorting
        lengthMenu: [5, 10, 25],
        pageLength: 5,
        dom: 'rt' // Only table and pagination controls
    });

    // Initial setup
    updateCustomInfo();

    // Handle "Select All" checkbox
    $('#user_list_table_tabs-22 #select_all').on('change', function () {
        let isChecked = $(this).prop('checked');
        // Check/uncheck all checkboxes on the current page
        table.rows({ page: 'current' }).nodes().to$().find('input.row-checkbox').prop('checked', isChecked);
        table.rows({ page: 'current' }).nodes().to$().find('tr').prevObject.each(function (e) {
            if (!isChecked) {
                $(this).removeClass("selected");
            } else {
                $(this).addClass("selected");
            }
        })
        updateSelectInfo();
    });

    // Handle individual row checkbox changes
    $('#user_list_table_tabs-22').on('change', '.row-checkbox', function () {
        const row = $(this).closest('tr');
        if ($(this).prop('checked')) {
            row.addClass('selected');
        } else {
            row.removeClass('selected');
        }
        updateSelectInfo();
    });

    // Handle dropdown menu click to delete selected rows
    $('#user_list_table_tabs-22').on('click', '.delete_selected', function (event) {
        event.preventDefault(); // Prevent default action
        const row = $(this).closest('tr');
        if (row.length > 0) {
            table.rows(row).remove().draw(false);
            updateSelectInfo();
        }
    });

    $('#user_list_table_tabs-22').on('click', '.main_delete_selected .delete_selected', function (event) {
        event.preventDefault(); // Prevent default action
        removeCheckedRows();
    });

    // Handle deletion of checked rows
    function removeCheckedRows() {
        let checkedRows = $('#user_list_table_tabs-22').find('.row-checkbox:checked').closest('tr');
        if (checkedRows.length > 0) {
            table.rows(checkedRows).remove().draw(false);
            updateSelectInfo();
        }
    }

    // Update custom dropdown and info display
    $('#user_list_table_tabs-22 #custom_length').on('change', function () {
        table.page.len($(this).val()).draw();
    });

    table.on('draw', function () {
        updateCustomInfo();
    });

    // Update custom info display
    function updateCustomInfo() {
        let info = table.page.info();
        if (info) {
            $('#user_list_table_tabs-22 #custom_info').text(`${info.start + 1}-${info.end} of ${info.recordsTotal}`);
            $('#user_list_table_tabs-22 #custom_prev').prop('disabled', info.page === 0);
            $('#user_list_table_tabs-22 #custom_next').prop('disabled', info.page >= info.pages - 1);
        }
    }

    // Pagination controls
    $('#user_list_table_tabs-22 #custom_prev').on('click', function () {
        table.page('previous').draw('page');
    });

    $('#user_list_table_tabs-22 #custom_next').on('click', function () {
        table.page('next').draw('page');
    });

    // Update selection info and toggle visibility of delete section
    function updateSelectInfo() {
        let selectedCount = $('#user_list_table_tabs-22').find('.row-checkbox:checked').length;
        $('#user_list_table_tabs-22 #custom_select_info').text(`${selectedCount} selected`).toggle(selectedCount > 0);
        $('#user_list_table_tabs-22 .main_delete_selected').toggle(selectedCount > 0);
        $('#user_list_table_tabs-22 #select_all').prop('checked', selectedCount === table.rows({ page: 'current' }).nodes().to$().find('input.row-checkbox').length);
    }
});