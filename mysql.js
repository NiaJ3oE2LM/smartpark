var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '64.137.209.170', //127.0.0.1  nel server
<<<<<<< HEAD
  user     : 'intelsmartpark',
  password : 'vrfablabintel',
  database : 'intelmaker'
});
exports.insertOccupato = function (parkID, beaconID, plate, occupato, callback){

    var sql="INSERT INTO ISP_register (parkID, beaconID, timeStart, plate, state) VALUES ("+parkID+",'"+beaconID+"',SYSDATE(),'"+plate+"',"+occupato+")";
    connection.query(sql, function(err, result){

      if(err) callback(err, null);
      else callback(null, result);

    });

}

exports.updateLibero = function (parkID, beaconID, plate, callback){

    var sql="UPDATE ISP_register SET timeFinish = SYSDATE() WHERE parkID="+parkID+" AND beaconID='"+beaconID+"' AND timeFinish IS NULL";
    connection.query(sql, function(err, result){

      if(err) callback(err, null);
      else callback(null, result);
=======
  user     : 'urbike',
  password : 'vrfablabintel',
  database : 'urbike'
});

exports.setUser = function (userId,bikeId,pin,callback){//return userPin
  var sql="update register set userId = (select id from users where id= "+userId+") where bikeId = (select id from bikes where id= "+bikeId+") and userId is null and pin = "+pin+";";
  connection.query(sql, function(err, result){

    if(err) callback(err, null);
    else callback(null, result);

  });
}

exports.getUser = function (bikeId, callback){//bike sets his pin
  //TODO il database gestisce la logica dell'insert in register controllando che non si possano inserire duplicati.NON SE PO!
  var sql="select userId from register where bikeId = (select id from bikes where id= "+bikeId+");";
  connection.query(sql, function(err, result){

    if(err) callback(err, null);
    else callback(null, result);
>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0

  });
}

<<<<<<< HEAD
//TODO remove logs
exports.getAvailableNearByRadius= function (latitude, longitude, radius, callback){
  var sql="SELECT DISTINCT ISP_parks.* FROM ISP_parks LEFT JOIN ISP_register ON ISP_parks.parkID = ISP_register.parkID WHERE (longitude BETWEEN "+(longitude-radius)+" AND "+(longitude+radius)+") AND (latitude BETWEEN "+(latitude-radius)+" AND "+(latitude+radius)+") AND ISP_parks.parkID NOT IN (SELECT parkID FROM ISP_register WHERE timeFinish IS NULL)";
  console.log(sql);
  connection.query(sql, function(err, result){
    if(err) callback(err, null);
    else {
      callback(null, result);
      console.log(result);
    }
  });
}

exports.getAbusiveNearByRadius= function (callback){
  var sql="SELECT ISP_parks.parkID, ISP_parks.latitude, ISP_parks.longitude FROM ISP_register INNER JOIN ISP_parks ON ISP_parks.parkID = ISP_register.parkID WHERE  timeFinish IS NULL AND state = 2;";
  console.log(sql);
  connection.query(sql, function(err, result){
    if(err) callback(err, null);
    else {
      callback(null, result);
      console.log(result);
    }
  });
}

exports.updateUser = function (userID, timeStart, timeFinish, callback){ //modifica userID timeStart e timeFinish
  var sql="UPDATE ISP_users SET timeStart='"+timeStart+"', timeFinish='"+timeFinish+"' WHERE userID='"+userID+"'";
  connection.query(sql, function(err, result){
    if(err) callback(err, null);
    else callback(null, result);
  });
}

exports.getUser = function (userID, callback){
  var sql="SELECT * FROM ISP_users WHERE userID='"+userID+"'";
  connection.query(sql, function(err, result){
    if(err) callback(err, null);
    else callback(null, result[0]);
  });
}


//exports.endConnection = connection.end();
=======
exports.setPin = function (bikeId, pin, callback){//bike sets his pin
  //TODO il database gestisce la logica dell'insert in register controllando che non si possano inserire duplicati.NON SE PO!
  var sql="update register set userId=null, pin="+pin+",timeStart=null where bikeId=(select id from bikes where id= "+bikeId+") and timeFinish is not null";
  //console.log(sql);
  connection.query(sql, function(err, result){

    if(err) callback(err, null);
    else callback(null, result);

  });
}

exports.unlock = function (bikeId, callback){//timestart
    var sql="update register set timeStart = sysdate(), timeFinish = null where bikeId= (select id from bikes where id= "+bikeId+" and userId is not null;";
  connection.query(sql, function(err, result){

    if(err) callback(err, null);
    else callback(null, result);

  });
}

exports.updatePos = function (bikeId, lat, lon, callback){
  var sql="UPDATE bikes SET lat="+lat+", lon="+lon+" WHERE id=(select id from bikes where id= "+bikeId+");";
  connection.query(sql, function(err, result){

    if(err) callback(err, null);
    else callback(null, result);

  });
}

exports.lock = function (bikeId, callback){
  var sql="update register set timeFinish=sysdate() where bikeId=(select id from bikes where id= "+bikeId+") and timeStart is not null; update bikes set lat=50, lon=12 where id=(select id from bikes where id= "+bikeId+");";
  connection.query(sql, function(err, result){

    if(err) callback(err, null);
    else callback(null, result);

  });
}
>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
