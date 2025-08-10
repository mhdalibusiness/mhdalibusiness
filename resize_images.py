from PIL import Image
import os

# مجلد الصور الأصلية
input_folder = "images"
# مجلد لحفظ الصور الناتجة
output_folder = "output"

# إنشاء مجلد الإخراج إذا لم يكن موجودًا
os.makedirs(output_folder, exist_ok=True)

# تمر على كل ملف في مجلد الصور
for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
        path = os.path.join(input_folder, filename)
        image = Image.open(path)

        width, height = image.size

        # تحديد البُعد الأصغر
        min_side = min(width, height)

        # حساب إحداثيات القص من المنتصف
        left = (width - min_side) // 2
        top = (height - min_side) // 2
        right = left + min_side
        bottom = top + min_side

        # قص الصورة
        cropped_image = image.crop((left, top, right, bottom))

        # حفظ الصورة الناتجة في مجلد الإخراج
        save_path = os.path.join(output_folder, filename)
        cropped_image.save(save_path)

        print(f"✔️ تمت معالجة: {filename}")

print("\n✅ اكتملت عملية قص الصور إلى مربعات.")
