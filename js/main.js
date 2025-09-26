export let currentUser = null;
export let currentRole = null;
const employees = [
'แม่เปิ้ล', 'น้าจอส', 'น้าปุ้ย', 'แน็ตตี้', 'เกด', 'พี่เจ้ย',
'ลูกศร', 'พี่ปู', 'ป้าตุ้ม', 'พี่วัน', 'พี่หนูเล็ก', 'โดนัท', 'พี่ซัมเมอร์'
];
let leaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
let compensatoryWorkRequests = JSON.parse(localStorage.getItem('compensatoryWorkRequests')) || [];
let employeeBalances = JSON.parse(localStorage.getItem('employeeBalances')) || {};
// Initialize employee balances
employees.forEach(emp => {
if (!employeeBalances[emp]) {
    employeeBalances[emp] = {
  vacation: 15,
  sick: 30,
  annual: 19,
  compensatory: 0
    };
}
});
function selectEmployee(name, event) {
    document.getElementById('employeeUsername').value = name;
    console.log(name)
    // Add visual feedback
    const buttons = document.querySelectorAll('.employee-btn');
    buttons.forEach(btn => {
        btn.classList.remove('ring-4', 'ring-blue-300', 'bg-blue-200');
    });
    // Highlight selected button
    event.target.closest('.employee-btn').classList.add('ring-4', 'ring-blue-300');
    // Auto login after selection
    setTimeout(() => {
        employeeLogin();
    }, 500);
    }
    function employeeLogin() {
        const username = document.getElementById('employeeUsername').value.trim();
        if (employees.includes(username)) {
            currentUser = username;
            currentRole = 'employee';
            localStorage.setItem('currentUser', currentUser);
            localStorage.setItem('currentRole', currentRole);
            location.href = './Dashbord.html';
        } else {
            alert('ไม่พบชื่อผู้ใช้นี้ในระบบ');
        }
    }
    window.selectEmployee = selectEmployee;