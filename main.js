function getContract (e) {
        var url = '/DeployContract';
        result = loadJSON(url ,{},"json",loadContract,function(jsresponse) {console.log("error : " + jsresponse)});
    }   
function loadContract(contractData) {
    console.log('coming back ...' +contractData.contractAddress );
    document.getElementById('contract').value = contractData.contractAddress;
}

 


