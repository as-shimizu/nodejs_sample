function showTable(stName, stBelong, stTel, stEmail) {
    //配列作成
    var name = stName.split(',');
    var belong = stBelong.split(',');
    var tel = stTel.split(',');
    var email = stEmail.split(',');

    var result = document.getElementById('result');
    
    //ラベル作成
    var trLabel = document.createElement('tr');
    var labelName = document.createElement('th');
    var labelBelong = document.createElement('th');
    var labelTel = document.createElement('th');
    var labelEmail = document.createElement('th');

    labelName.innerText = '名前';
    labelBelong.innerText = '所属';
    labelTel.innerText = '電話番号';
    labelEmail.innerText = 'メールアドレス';

    trLabel.setAttribute('class', 'view');
    labelName.setAttribute('class', 'view');
    labelBelong.setAttribute('class', 'view');
    labelTel.setAttribute('class', 'view');
    labelEmail.setAttribute('class', 'view');

    result.insertBefore(trLabel, null);
    trLabel.insertBefore(labelName, null);
    trLabel.insertBefore(labelBelong, null);
    trLabel.insertBefore(labelTel, null);
    trLabel.insertBefore(labelEmail, null);

    //リスト表示
    for(var i=0; i < name.length; i++) {
        var tr = document.createElement('tr');
        var recordName = document.createElement('td');
        var recordBelong = document.createElement('td');
        var recordTel = document.createElement('td');
        var recordEmail = document.createElement('td');

        recordName.innerText = name[i];
        recordBelong.innerText = belong[i];
        recordTel.innerText = tel[i];
        recordEmail.innerText = email[i];

        tr.setAttribute('class', 'view');
        recordName.setAttribute('class', 'view');
        recordBelong.setAttribute('class', 'view');
        recordTel.setAttribute('class', 'view');
        recordEmail.setAttribute('class', 'view');
    
        result.insertBefore(tr,null);
        tr.insertBefore(recordName, null);
        tr.insertBefore(recordBelong, null);
        tr.insertBefore(recordTel, null);
        tr.insertBefore(recordEmail, null);
    };
}