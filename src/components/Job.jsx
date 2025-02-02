const Job = ({title,headline,tasks}) => (
    <div className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{headline}</p>
        <ul className="list-disc list-inside mt-2">
            {tasks.map((task)=><li>{task}</li>)}
        </ul>
    </div>
);

export default Job;