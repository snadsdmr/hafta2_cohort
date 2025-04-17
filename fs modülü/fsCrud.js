const fs = require('fs');

// 1. CREATE
fs.writeFile('employees.json', JSON.stringify({ name: "Employee 1 Name", salary: 2000 }, null, 2), 'utf8', (err) => {
    if (err) console.log('Dosya oluşturulurken hata:', err);
    else {
        console.log('Dosya oluşturuldu ve veri eklendi.');

        // 2. READ
        fs.readFile('employees.json', 'utf8', (err, data) => {
            if (err) console.log('Dosya okunurken hata:', err);
            else {
                console.log('Okunan Veri:', data);

                // 3. UPDATE
                const updatedData = { name: "Employee 1 Updated", salary: 3000 };
                fs.writeFile('employees.json', JSON.stringify(updatedData, null, 2), 'utf8', (err) => {
                    if (err) console.log('Güncellenirken hata:', err);
                    else {
                        console.log('Dosya başarıyla güncellendi.');

                        // 4. DELETE
                        fs.unlink('employees.json', (err) => {
                            if (err) console.log('Silinirken hata:', err);
                            else console.log('Dosya başarıyla silindi.');
                        });
                    }
                });
            }
        });
    }
});
