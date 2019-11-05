load('api_timer.js');
load('api_mqtt.js');
load('api_ds18b20.js');

Timer.set(5000, Timer.REPEAT, function(){
    if(DS18B20.connected()){
        MQTT.pub("Freezer/device1/temperature", JSON.stringify(DS18B20.getF()), 0 /* QoS */);
    } else {
        MQTT.pub("Freezer/device1/temperature", JSON.stringify(-999), 0 /* QoS */);
    }
}, null);