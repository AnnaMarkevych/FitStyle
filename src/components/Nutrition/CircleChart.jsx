
    const CircleChart = ({ chartData, colors, legend}) => {
    // console.log(chartData);

        chartData.length = 3;

        let add = function(arr) {
            return arr.reduce((a, b) => a + b, 0);
        };

        let sum = add(chartData);
        // console.log(sum);

        const convertIntoPerc = (arr) =>
            arr.reduce((acc, el) => {
                acc.push(Math.round(el/sum * 100));
                return acc;
            }, []);

        chartData = convertIntoPerc(chartData);
        // console.log(chartData);

        const total = chartData.reduce((acc, value) => acc + value, 0);
        let angles = chartData.map(value => (value / total) * 360);
        let sumAngels = 0;

        angles = angles.map((value) => {
            sumAngels += value;
            return  sumAngels;
        });

        // console.log(angles);

        const gradient = `conic-gradient(${colors
            .map((color, index) => `${color} 0 ${angles[index]}deg`)
            .join(', ')})`;

        // console.log(gradient); //conic-gradient(#3498db 0 180deg, #e61a19 0 72deg, #27ae60 0 108deg)

        return ( <div className='circle-chart'>
                <div
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: gradient
                    }}
                ></div>
                <div className='circle center'></div>
                <div className='legend'>
                    {colors.map((color, index) => (
                        <div key={index} className='legend-raw'>
                            <div className='legend-color' style={{background: color}}></div>
                            <div className='legend-description'>{legend[index]}&#8195;<b>{chartData[index]}%</b></div>
                        </div>
                    ))}
                </div>

            </div>

        );
    };

    export {CircleChart}
