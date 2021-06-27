const NewVehicleDetails = () => {
    const {error, loading, data} = useQuery(newVehicles);
    const {newVehicle, setNewVehicle}  = useState(null);
    useEffect(() => {
        if (data) {
        console.log(data);
        }
    },[data])

    return ( 
        <div>

        </div>
     );
}
 
export default NewVehicleDetails;