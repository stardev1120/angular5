//== Class definition

var DatatableRemoteAjaxDemo = function () {
    //== Private functions
    var baseUrl = 'http://localhost:3000/api/admin/users/search'
    // basic demo
    var demo = function () {

        var datatable = $('.m_datatable').mDatatable({
            // datasource definition
            data: {
                //type: 'remote',
                source: {
                    read: {
                        // sample GET method
                        method: 'post',
                        //url: 'http://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php',
                        url: baseUrl,
                        headers: {"authorization": localStorage.getItem('token')},
                        map: function (raw) {
                            // sample data mapping
                            var dataSet = raw;
                            if (typeof raw.data !== 'undefined') {
                                dataSet = raw.data;
                            }
                            return dataSet;
                        },
                    },
                },
                pageSize: 10,
                saveState: {
                    cookie: true,
                    webstorage: true,
                },
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true,
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: '', // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            toolbar: {
                // toolbar items
                items: {
                    // pagination
                    // actions: {
                    //     delete: {
                    //         name: 'Delete All',
                    //         url: '/delete',
                    //         fn: function (ids) {
                    //             console.log(ids);
                    //         }
                    //     },
                    //     activate: {
                    //         name: 'Activate All',
                    //         url: '/active',
                    //         fn: function (ids) {
                    //             console.log(ids);
                    //         }
                    //     }
                    // },
                    pagination: {
                        // page size select
                        pageSizeSelect: [ 10, 20, 30, 50, 100],
                    },
                },
            },

            search: {
                input: $('#email'),
            },

            // columns definition
            columns: [
                {
                    field: 'select',
                    width: 20,
                    title: ' <input type="checkbox" name="selectall" id="selectall" value="all"/>',
                    sortable: false,
                    overflow: 'visible',
                    template: function (row) {
                        return '<input type="checkbox" id="select-' + row.id + '" data-value="'+row.id+'"/>';
                    },
                },
                {
                    field: 'fname',
                    title: 'fname',
                    filterable: false, // disable or enable filtering
                    width: 100
                },
                {
                    field: 'mname',
                    title: 'mname',
                    filterable: false, // disable or enable filtering
                    width: 100
                },
                {
                    field: 'lname',
                    title: 'lname',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'email',
                    title: 'email',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'dob',
                    title: 'dob',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'user_location',
                    title: 'user_location',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'phone_number',
                    title: 'phone_number',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'verified',
                    title: 'verified',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'accept',
                    title: 'accept',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'no_of_active_loans',
                    title: 'no_of_active_loans',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'status',
                    title: 'status',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'relationship',
                    title: 'relationship',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'available_amount',
                    title: 'available_amount',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'min_availalble_amount',
                    title: 'min_availalble_amount',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'number_of_attempts',
                    title: 'number_of_attempts',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'status',
                    title: 'status',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'last_attempts_time',
                    title: 'last_attempts_time',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'created_at',
                    title: 'created_at',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'umbrella_score',
                    title: 'umbrella_score',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'smscode',
                    title: 'smscode',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'uScore_status',
                    title: 'uScore_status',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'id_proof_file',
                    title: 'id_proof_file',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'selfie_proof_file',
                    title: 'selfie_proof_file',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'address_proof_file',
                    title: 'address_proof_file',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'id_verification_status',
                    title: 'id_verification_status',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'address_verification_status',
                    title: 'address_verification_status',
                    filterable: false, // disable or enable filtering
                    width: 50
                },
                {
                    field: 'profilepic',
                    title: 'profilepic',
                    // sortable: 'asc', // default sort
                    filterable: false, // disable or enable filtering
                    width: 50,
                    template: function (row) {
                        return row._image ?'<img class="datatable-cell-image" src="' + row._image + '" alt="' + row.fname + '" >':'';
                    }
                    // basic templating support for column rendering,
                    //template: '{{OrderID}} - {{ShipCountry}}',
                },{
                    field: 'country',
                    title: 'Country',
                    // sortable: 'asc', // default sort
                    filterable: false, // disable or enable filtering
                    width: 100,
                    template: function (row) {
                        return row.country.name;
                    }
                },
                {
                    field: 'Actions',
                    width: 110,
                    title: 'Actions',
                    sortable: false,
                    overflow: 'visible',
                    template: function (row) {
                        var dropup = (row.getDatatable().getPageSize() - row.getIndex()) <= 4 ? 'dropup' : '';
                        return '\
                            <a href="#/users/'+row.id+'" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<div class="modal fade" id="model-del-' + row.id + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
                            <div class="modal-dialog" role="document">\
                            <div class="modal-content">\
                            <div class="modal-header">\
                            <h5 class="modal-title" id="exampleModalLabel">\
                            Delete\
                            </h5>\
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                            <span aria-hidden="true">\
                            &times;\
                        </span>\
                        </button>\
                        </div>\
                        <div class="modal-body">\
                            <p>\
                            Are you Sure ?\
                       </p>\
                        </div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">\
                            Close\
                            </button>\
                            <button id="delete-row-' + row.id + '" type="button" class="btn btn-danger" data-dismiss="modal">\
                             Delete\
                            </button>\
                            </div>\
                            </div>\
                            </div>\
                            </div>\
						<a href="javascript:void(0)" \
						  class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" \
						  title="Delete"\
						   data-target="#model-del-' + row.id + '" data-toggle="modal"> \
							<i class="la la-trash"></i>\
						</a>\
					';
                    },
                }],
        });

        var query = datatable.getDataSourceQuery();

        $('#m_form_email').on('change', function () {
            // shortcode to datatable.getDataSourceParam('query');
            var query = datatable.getDataSourceQuery();
            query.email = $(this).val();
            // shortcode to datatable.setDataSourceParam('query', query);
            datatable.setDataSourceQuery(query);
            datatable.load();
        }).val(typeof query.email !== 'undefined' ? query.email : '');


        $('#m_form_name').on('change', function () {
            // shortcode to datatable.getDataSourceParam('query');
            var query = datatable.getDataSourceQuery();
            query.fname = $(this).val(); // todo: we need to do for mname and lname with or and like
            // shortcode to datatable.setDataSourceParam('query', query);
            datatable.setDataSourceQuery(query);
            datatable.load();
        }).val(typeof query.fname !== 'undefined' ? query.fname : '');

        $('#m_form_phone_number').on('change', function () {
            // shortcode to datatable.getDataSourceParam('query');
            var query = datatable.getDataSourceQuery();
            query.phone_number = $(this).val();
            // shortcode to datatable.setDataSourceParam('query', query);
            datatable.setDataSourceQuery(query);
            datatable.load();
        }).val(typeof query.phone_number !== 'undefined' ? query.phone_number : '');

        $('#selectall').change(function (e) {
            console.log($(e.target)[0].checked, 'e');
            $('[id^="select-"]').prop('checked', $(e.target).prop('checked'));
        });
        datatable.on('click', '[id^="delete-row-"]', function (e) {
            var id = $(e.target).prop('id');
            id = id.replace('delete-row-', '');
            console.log(id, 'e');

            $.ajax({
                url: baseUrl + '/' + id,
                method: 'delete'
            }).done(datatable.load);


        });


    };

    return {
        // public functions
        init: function () {
            demo();
        },
    };
}();

jQuery(document).ready(function () {
    DatatableRemoteAjaxDemo.init();
});