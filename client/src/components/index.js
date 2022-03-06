import io from 'socket.io-client';
import {useState, useEffect} from 'react'; 

const socket = io.connect('http://localhost:5000');

const initialParams = { name: "", message: "" };

const Components = () => {
    const [params, setParams] = useState({ ...initialParams });
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const callback = (rows) => {
            setRows(rows);
        };

        socket.on('load', callback);
        socket.emit('load');

        return () => {
            socket.off('load', callback);
        };
    }, []);

    useEffect(() => {
        const callback = (row) => {
            setRows([...rows, row]);
        };

        socket.on('message', callback);

        return () => {
            socket.off('message', callback);
        };
    }, [rows]);

    const paramsChange = (e) => {
        const { target: { name, value }} = e;
        setParams({ ...params, [name]: value });
    };

    const paramsSubmit = (e) => {
        e.preventDefault();
        socket.emit('message', params);
        setParams({ ...initialParams });
    };

    const renderRows = () => {
        return rows.map((row, index) => {
            const {name, message} = row;
            return (
                <div key={ index }>
                    <b>{ name }</b> : { message }
                </div>
            );
        });
    };

    return (
        <div>
            <form onSubmit={ paramsSubmit }>
                <input type="text"
                    name="name"
                    value={ params.name }
                    placeholder="이름"
                    onChange={ paramsChange }/>
                <input type="text"
                    name="message"
                    value={ params.message }
                    placeholder="내용"
                    onChange={ paramsChange }/>
                <input type="submit"
                    value="보내기" />
            </form>
            <div>{ renderRows() }</div>
        </div>
    );
};

export default Components;