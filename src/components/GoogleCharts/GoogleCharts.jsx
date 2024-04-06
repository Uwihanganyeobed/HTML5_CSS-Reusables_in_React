import Chart from 'react-google-charts';

const GoogleCharts = () => {
  return (
    <div>
      <h1>My Cool Languages</h1>
      <Chart
        width={'550px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['HTML5', 'Hours per Day'],
          ['CSS', 9.5],
          ['JS', 8.5],
          ['React', 7.8],
          ['Node Js', 6.7],
          ['Express Js', 8.1],
          ['MongodB', 7.1],
          ['MySql', 5.1]
        ]}
        options={{
          title: 'My Average Programming Languages',
        }}
        rootProps={{ 'data-testid': '' }}
      />
    </div>
  );
};

export default GoogleCharts;
