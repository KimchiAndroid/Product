const key_list = ['all', '000', '001', '002', '003', '004', '005'];
$(document).ready(() => {
    key_list.map(key => {
        $('');
    });
});

const getDate = site_code => {
    $.ajax({
        url: key,
        success: res => {
            $(`#${key}_code`).text(res);
            $(`#${key}_button`).css('background-color', 'LightGreen');
        },
        error: err => {
            $(`#${key}_code`).text(err.responseText);
            $(`#${key}_button`).css('background-color', 'red');
        },
    });
};
