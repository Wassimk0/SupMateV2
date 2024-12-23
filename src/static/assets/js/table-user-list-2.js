// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0

import DataTable from "datatables.net-dt";

document.addEventListener('DOMContentLoaded', function () {
    // Initialize DataTable
    const table = new DataTable('#user_list2_table #userExample', {
        columnDefs: [
            { orderable: false, className: 'select-checkbox', targets: 0 },
            { orderable: false, targets: [] } // Adjust as needed
        ],
        select: { style: 'multi', selector: 'td:first-child input.row-checkbox' },
        order: [], // Clear default sorting
        lengthMenu: [10, 25, 50],
        pageLength: 10,
        dom: 'rt' // Only table and pagination controls
    });

    // Initial setup
    updateCustomInfo();


    // Handle individual row checkbox changes
    document.querySelector('#user_list2_table').addEventListener('change', function (event) {
        if (event.target.classList.contains('row-checkbox')) {
            const row = event.target.closest('tr');
            if (event.target.checked) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
            }
            updateSelectInfo();
        }
    });

    // Update custom dropdown and info display
    document.querySelector('#custom_length').addEventListener('change', function () {
        table.page.len(this.value).draw();
    });

    table.on('draw', function () {
        updateCustomInfo();
    });

    // Update custom info display
    function updateCustomInfo() {
        const info = table.page.info();
        if (info) {
            document.querySelector('#custom_info').textContent = `${info.start + 1}-${info.end} of ${info.recordsTotal}`;
            document.querySelector('#custom_prev').disabled = info.page === 0;
            document.querySelector('#custom_next').disabled = info.page >= info.pages - 1;
        }
    }

    // Pagination controls
    document.querySelector('#custom_prev').addEventListener('click', function () {
        table.page('previous').draw('page');
    });

    document.querySelector('#custom_next').addEventListener('click', function () {
        table.page('next').draw('page');
    });

    document.querySelector('#userExample tbody').addEventListener('click', function (event) {
        // Get the clicked row data
        const row = event.target.closest('tr');
        if (!row) return; // Ensure that a row was clicked

        // Remove 'selected' class from all rows
        document.querySelectorAll('#userExample tbody tr').forEach(function (tr) {
            tr.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked row
        row.classList.add('selected');

        // Extract image and name from the first cell
        const profileCell = row.querySelector('td:first-child');
        const name = profileCell.querySelector('h4').textContent.trim();
        const imageSrc = profileCell.querySelector('img').getAttribute('src');

        // Extract other data from the remaining cells
        const role = row.querySelector('td:nth-child(2)').textContent.trim();
        const department = row.querySelector('td:nth-child(3)').textContent.trim();
        const email = row.querySelector('td:nth-child(4)').textContent.trim();
        const phone = row.querySelector('td:nth-child(5)').textContent.trim();

        // Update the selected data display
        document.querySelector('#role').textContent = role;
        document.querySelector('#namecontact').textContent = name;
        document.querySelector('#email').textContent = 'Email: ' + email;
        document.querySelector('#phone').textContent = 'Phone: ' + phone;
        document.querySelector('#avatar').setAttribute('src', imageSrc);
        document.querySelector('#avatar').style.display = 'block';
        document.querySelector('#selectedData').style.display = 'block';
        document.querySelector('#hideDefault').style.display = 'none';
    });

});