function patient_(firstName, lastName, age, sex, dob, phoneNumber, address, blood_type, condition, date_arrived, room_number) {
    var num = Math.floor(Math.random()*9000) + 10000;;

    var obj = {
            firstName: firstName,
            lastname: lastName,
            age: age,
            sex: sex,
            address: address,
            phoneNumber: phoneNumber,
            blood_type: blood_type,
        condition: condition,
        data_arrived: date_arrived,
        room_number : room_number
        };


    return obj


}





firebase.database().ref("patient_report/"+Math.round(Math.random()*9999)).set(patient_("Alexa",
    "Smith",
    "18",
    "F",
    "September 12 1998",
    "+19089308704",
    "123 redbull drive, New York",
    "B-",
    "stable",
    Date.now(),
    "43A"));
