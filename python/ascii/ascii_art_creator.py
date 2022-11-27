from PIL import Image

ascii_characters_by_surface = "`^\",:;Il!i~+_-?][}{1)(|▓"

def main():
    image = Image.open('anya.jpeg')

    ascii_art = convert_to_ascii(image)
    save_as_text(ascii_art)

def convert_to_ascii(image):
    ascii_art = []
    width, height = image.size

    for y in range(0, height - 1):
        # print out the number of line according to the height
        line = ''
        for x in range(0, width - 1):
            px = image.getpixel((x, y))
            line += convert_pixel_to_char(px)

        ascii_art.append(line)
    return ascii_art

def convert_pixel_to_char(pixel):
    (r, g, b) = pixel
    pixel_brightness = r + g + b
    max_brightness = 255 * 3
    brightness_weight = len(ascii_characters_by_surface) / max_brightness
    index = int(pixel_brightness * brightness_weight) - 1
    return ascii_characters_by_surface[index]

def save_as_text(ascii_art):
    with open("image.txt", "w") as file:
        for line in ascii_art:
            file.write(line)
            file.write('\n')

if __name__ == "__main__":
    main()
