


export const handleFailed = (setUserData, setLoggedInUserData, id, idx, cartType) => {
    setLoggedInUserData(prev => {
        const newLoggedInUserData = {
            ...prev,
            taskCount: {
                ...prev.taskCount,
                [cartType]: prev.taskCount[cartType] - 1,
                failed: prev.taskCount.failed + 1,
            },
            tasks: prev.tasks.map((task, i) => {

                if (idx == i) {
                    return {
                        ...task,
                        [cartType]: false,
                        failed: true,
                    }
                }
                return task;
            })
        }

        setUserData(p => {
            const newUserData = p.map((e) => {
                if (e.id == id) {
                    return newLoggedInUserData;
                }
                return e;
            })

            localStorage.setItem('employees', JSON.stringify(newUserData))
            return newUserData;
        })

        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: newLoggedInUserData }))
        return newLoggedInUserData;

    })
}


export const handleAccepted = (setUserData, setLoggedInUserData, id, idx, cartType) => {
    setLoggedInUserData(prev => {
        const newLoggedInUserData = {
            ...prev,
            taskCount: {
                ...prev.taskCount,
                [cartType]: prev.taskCount[cartType] - 1,
                active: prev.taskCount.active + 1,
            },
            tasks: prev.tasks.map((task, i) => {
                if (idx == i) {
                    return {
                        ...task,
                        [cartType]: false,
                        active: true,
                    }
                }
                return task;
            })
        }
        setUserData(p => {
            const newUserData = p.map((e) => {
                if (e.id == id) {
                    return newLoggedInUserData;
                }
                return e;
            })

            localStorage.setItem('employees', JSON.stringify(newUserData))
            return newUserData;
        })
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: newLoggedInUserData }))
        return newLoggedInUserData;
    })
}

export const CompletedHandler = (setUserData, setLoggedInUserData, id, idx, cartType) => {
        setLoggedInUserData(prev => {
            const newLoggedUserData = {
                ...prev,
                taskCount: {
                    ...prev.taskCount,
                    [cartType]: prev.taskCount[cartType] - 1,
                    completed: prev.taskCount.completed + 1,
                },
                tasks: prev.tasks.map((e, i) => {

                    if (i == idx) {
                        return {
                            ...e,
                            [cartType]: false,
                            completed: true,
                        }
                    }

                    return e;
                })
            }
            setUserData(p => {
                const newUserData = p.map((e) => {
                    if (e.id == id) {
                        return newLoggedUserData;
                    }
                    return e;
                })
                localStorage.setItem('employees', JSON.stringify(newUserData))
                return newUserData
            })
            localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: newLoggedUserData }))
            return newLoggedUserData;
        })

    }