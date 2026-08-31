const SUPABASE_URL = 'https://gtynotqcwgdeynzmgbly.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2c6dYLHIeaR6ohv7Tl5bQQ_QkDAOwsq';

// تهيئة العميل
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', async () => {
    const statusDiv = document.getElementById('status');
    
    try {
        // اختباري للاتصال
        if (supabaseClient) {
            statusDiv.innerText = 'تم الاتصال بـ Supabase بنجاح! 🚀';
            statusDiv.style.backgroundColor = '#15803d';
        }
    } catch (error) {
        statusDiv.innerText = 'حدث خطأ في الاتصال: ' + error.message;
        statusDiv.style.backgroundColor = '#b91c1c';
    }
});
