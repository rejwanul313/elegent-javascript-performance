const randomArray = Array.from({length: 10000000}, ()=>Math.floor(Math.random()*1000));
        randomArray.push('banana');

        function findBanana(){
            if(randomArray.includes('banana')){
                return true
            }
            return false
        }

        const itemsSet = new Set(randomArray);

        function findBananaSet(){
            if(itemsSet.has('banana')){
                return true
            }
            return false
        }


        function sumNumbersForEach(numbers) {
            let totalSum = 0;
            numbers.forEach(num => {
                totalSum += num;
            });
            return totalSum;
        }

        function sumNumbersFor(numbers) {
            let totalSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                totalSum += numbers[i];
            }
            return totalSum;
        }
        function measurePerformance(func, n){
            const start = performance.now();
            const result = func(n);
            const end = performance.now();
            console.log('--------------------------------');
            console.log(`Result : ${result}`);
            console.log(`Time taken ${func.name} : ${end - start} milliseconds`);
        }

        measurePerformance(findBanana, randomArray)
        measurePerformance(findBananaSet, randomArray)
        measurePerformance(sumNumbersFor, randomArray)
        measurePerformance(sumNumbersForEach, randomArray)
        