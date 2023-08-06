import os
import shutil
import tkinter as tk
from tkinter import filedialog, messagebox

def move_images(src_dir, dest_dir):
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp']
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    count = 1
    for root, _, files in os.walk(src_dir):
        for filename in files:
            if any(filename.lower().endswith(ext) for ext in image_extensions):
                new_filename = f"image{str(count).zfill(2)}.png"
                new_filepath = os.path.join(dest_dir, new_filename)
                old_filepath = os.path.join(root, filename)
                shutil.move(old_filepath, new_filepath)
                count += 1

def browse_source():
    folder_selected = filedialog.askdirectory()
    source_entry.delete(0, tk.END)
    source_entry.insert(tk.END, folder_selected)

def browse_dest():
    folder_selected = filedialog.askdirectory()
    dest_entry.delete(0, tk.END)
    dest_entry.insert(tk.END, folder_selected)

def on_move():
    src_dir = source_entry.get()
    dest_dir = dest_entry.get()
    
    if not src_dir or not dest_dir:
        messagebox.showerror("Error", "Please select both source and destination directories.")
        return

    move_images(src_dir, dest_dir)
    messagebox.showinfo("Success", "Images moved successfully!")

# Create the main window
root = tk.Tk()
root.title("Move Images GUI")

# Add components to the main window
source_label = tk.Label(root, text="Source Directory:")
source_label.pack(pady=10)

source_entry = tk.Entry(root, width=50)
source_entry.pack(pady=5)

source_browse_btn = tk.Button(root, text="Browse", command=browse_source)
source_browse_btn.pack(pady=5)

dest_label = tk.Label(root, text="Destination Directory:")
dest_label.pack(pady=10)

dest_entry = tk.Entry(root, width=50)
dest_entry.pack(pady=5)

dest_browse_btn = tk.Button(root, text="Browse", command=browse_dest)
dest_browse_btn.pack(pady=5)

move_btn = tk.Button(root, text="Move Images", command=on_move)
move_btn.pack(pady=20)

# Start the GUI event loop
root.mainloop()
