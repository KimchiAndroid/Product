const key_list = ['db', 'a000', 'a001', 'a002', 'a003', 'a004', 'a005'];
$(document).ready(() => {
    key_list.map(key =>
        $(`#${key}_button`).on('click', e => {
            checkServer(key);
        }),
    );
});

const checkServer = key => {
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
