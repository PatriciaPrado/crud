$(document).ready(function(){
    const _url = 'http://localhost:3000/alunos';
    $('#cadastrar').on('click', function(){
        var nome = $('#nome').val();
        var sexo = $('#sexo option:selected').val();
        console.log(nome, sexo);

        $.ajax({
            type:"POST",
            url: `${_url}`,
            dataType:"json",
            data: {nome: nome, sexo: sexo},
            success: function(data){
                if(data.id != null)
                console.log('Cadastrou');
            },
            error:function(data){

            }
        })
    })
})