describe('Another suite', function(){
    var resultado;
    it('Prueba de peticion REST', function(done){
        $.get("api/values/3", function(data){
            resultado = data;
            done();
        });
    });
    afterEach(function(done){
        expect(resultado).toBe("value");
        done();
    },1000);
});

describe('Suite para testear POST', function () {
    var resultado;
    it('Peticion REST tipo POST', function (done) {
        $.post("api/values",
            {
                id: "3"
            },
            function (data) {
                resultado = data;
            done();
        });
    });
    afterEach(function (done) {
        expect(resultado).toBe("3");
        console.log(resultado);
        done();
    }, 1000);
});

