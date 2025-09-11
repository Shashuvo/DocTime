import { toast } from "react-toastify";

const getStoredDoctor = () => {
    const storedDoctorSTR = localStorage.getItem("appointments");
    if (storedDoctorSTR) {
        const storedDoctorData = JSON.parse(storedDoctorSTR);
        return storedDoctorData;
    }
    else {
        return [];
    }
}

const addToStoredDoctor = (registration_number) => {
    const storedDoctorData = getStoredDoctor()
    if (storedDoctorData.includes(registration_number)) {
        toast.warning("You already have an appointment with this doctor today.", {
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        return false;
    }
    else {
        storedDoctorData.push(registration_number);
        const setDoctorData = JSON.stringify(storedDoctorData);
        localStorage.setItem("appointments", setDoctorData);
        return true;
    }
}
export {addToStoredDoctor, getStoredDoctor};
