var F22 ={
    price: 24000,
    processor: "MediaTek",
    Storage: "128GB",
    camera: "64MP",
    Display : "Super AMOLED",
    WLAN : "Wi-Fi 802.11 a/b/g/n/ac",
    Sensors : "Fingerprint (side-mounted), accelerometer, gyro, compass",
    Battery : "Li-Po 6000 mAh, non-removable",
    OS: "Android 13, One UI core 5.1",
    CPU : "Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
    GPU : "Mali-G52 MC2"
}

var properties = Object.keys(F22);
console.log(properties); //this will print only the keys

var propertyValues = Object.values(F22);
console.log(propertyValues); //this will only print the values