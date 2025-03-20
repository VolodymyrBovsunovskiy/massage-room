document.addEventListener("DOMContentLoaded", function () {
    const serviceForm = document.getElementById("serviceForm");
    const servicesContainer = document.getElementById("servicesContainer");

    let services = JSON.parse(localStorage.getItem("services")) || [];

    function renderServices() {
        servicesContainer.innerHTML = "";
        services.forEach((service, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${service.name}</strong> - ${service.price} грн
                <p>${service.description}</p>
                <button onclick="editService(${index})">Редагувати</button>
                <button onclick="deleteService(${index})">Видалити</button>
            `;
            servicesContainer.appendChild(li);
        });
        localStorage.setItem("services", JSON.stringify(services));
    }

    serviceForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("serviceName").value;
        const price = document.getElementById("servicePrice").value;
        const description = document.getElementById("serviceDescription").value;

        services.push({ name, price, description });
        renderServices();
        serviceForm.reset();
    });

    window.editService = function (index) {
        const newName = prompt("Нова назва:", services[index].name);
        const newPrice = prompt("Нова ціна:", services[index].price);
        const newDescription = prompt("Новий опис:", services[index].description);

        if (newName && newPrice) {
            services[index] = { name: newName, price: newPrice, description: newDescription };
            renderServices();
        }
    };

    window.deleteService = function (index) {
        services.splice(index, 1);
        renderServices();
    };

    renderServices();
});
