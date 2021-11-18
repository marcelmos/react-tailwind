function DataNode(props){

    const data = props.dataInfo;

    return(
        <pre>{data}</pre>
    );
}

export default DataNode;