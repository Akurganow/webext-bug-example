import {useState, useEffect} from 'react';
import Button from 'components/Button';

export default function () {
    const [history, setHistory] = useState<chrome.history.HistoryItem[]>([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        chrome.history.search({text: ''})
            .then((history) => {
                setHistory(history);
            })
    }, [setHistory]);

    return (
        <>
            <Button onClick={() => setCount(count + 1)}>
                {
                    count > 0
                        ? `You clicked ${count} times`
                        : 'Click me!'
                }
            </Button>
            <div>
                {history.map((item) => {
                    return (
                        <div key={item.id}>
                            <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
