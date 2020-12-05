$(() => {
    $.ajax({
        url:"http://localhost:8000/adminlist/get",
        success: function(result){
            $('#data').html('');
            result.forEach((el) =>{
                let tr =`<tr>
                <td>`+el.Party_Name+`</td>
                </tr>`
                $('#data').append(tr);
            });
        },
    });
});