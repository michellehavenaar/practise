let nums = [-2,3,4,7,8,9,11,13];


function binSearch(array, target){
    let left = 0;
    let right = array.length -1;
    console.log("right: " + right);

    while (left <= right){
        let mid = Math.floor((left + right)/2);
        console.log("mid: "+ mid);
        if(target == array[mid]){
            return mid;
        }
        else if(target < array[mid]){
            right = mid -1;
            console.log("right: " +right);
        }
        else{
            left = mid +1;
            console.log("left: " +left);
        }
    }
    return false;

}

console.log(binSearch(nums, 8))//should return 4

