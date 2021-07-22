const counterSpy = (arr) => {
       
    // code for tests 1-3
    // let civiArr = [];   
    // for(let i = 0; i < arr.length; i++) {
    //     if ( arr[i] !== 's' && arr[i] !== 'p' && arr[i] !== 'y') {
    //         civiArr.push(arr[i]);
    //     };

    // };

    // return civiArr;
    
    // code which pushes elements not equaling the test values to new array and returns new array in alphabetical order
    let civiArr = [];   
    for(let i = 0; i < arr.length; i++) {
        let split = arr[i].toLowerCase().split("");
        if (!split.includes('s') && !split.includes('p') && !split.includes('y')) {
            civiArr.push(arr[i]);
        };

        };
        return civiArr.sort();
};

  
  
  module.exports = {counterSpy};

  
