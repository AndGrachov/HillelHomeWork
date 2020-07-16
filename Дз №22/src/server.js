const api = {
        create: function(todo){
            return fetch(TODOLIST_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(todo),
            })
            .then((res) => res.json());
            },
        change: function(id, deal){
            fetch(TODOLIST_URL +'/' + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(deal),
            })
        },
        delete: function(dealId){
                fetch(TODOLIST_URL +'/' + dealId, {
                    method: 'DELETE',
                });
        } 
} 
