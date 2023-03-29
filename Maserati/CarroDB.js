const mysql = require('mysql')

class CarroDB{
  
    //reazliza a conexão com o DB com mysql
    static connect(){
        const connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'auto'
        
        })
        connection.connect()
        return connection
    }
//realiza uma consulta no DB
static getCarros(callback){
    let connection = CarroDB.connect
    let sql = 'select * from carro'
    let query = connection.query(sql, function(err,results,fields){
        if(err) throw err
        callback(results)
    })
    console.log(query.sql)
    connection.end()
}

//realzia consulta pelo tipo 
static getCarrosTipo(tipo, callback){
    let connection = CarroDB.connect
    let sql = "select * from carro where tipo = '"+tipo+"'"
    let query = connection (sql, function(err,results,fields){
        if(err)throw err 
        callback(results)

    })
    console.log(query.sql)
    connection.end
}
//salvar no BD
//Salva dados no banco
static save(carro, callback){
    const connection = CarroDB.connect()
    let sql = "insert into carro set ?"
    let query = connection.query(sql, carro, function(err,results,fields){
        if(err) throw err
        carro.id = results.insertId
        //retorna pela função callback
        callback(carro)
    })
    console.log(query.sql)
    connection.end()

}
}
