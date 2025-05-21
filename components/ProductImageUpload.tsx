"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Image, Package, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

const ProductImageUpload = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const files = Array.from(fileList); // ✅ Convert FileList to array
    if (!files) return;

    const newImageUrls = files?.map((file: any) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImageUrls]);
    setImageFiles((prev) => [...prev, ...files]);
  };

  const handleRemove = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index]); // cleanup
      newImages.splice(index, 1);
      return newImages;
    });

    setImageFiles((prev) => {
      const newImages = [...prev];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Product Image</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 overflow-hidden">
          {images?.length > 0 && (
            <>
              <Carousel setApi={setApi} className="w-full lg:max-w-xs">
                <CarouselPrevious className="-left-0 z-20 border-none bg-transparent dark:bg-transparent" />
                <CarouselContent>
                  {images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-square overflow-hidden rounded-md bg-background flex items-center justify-center">
                        <div className="absolute right-1 top-1">
                          <Button
                            className="rounded-full size-6 cursor-pointer"
                            onClick={() => handleRemove(index)}
                            variant={"outline"}
                            size={"icon"}
                          >
                            <X />
                          </Button>
                        </div>

                        <img src={img} alt="product-image" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="-right-0 z-20 border-none bg-transparent dark:bg-transparent" />
              </Carousel>
            </>
          )}

          {images?.length === 0 && (
            <>
              <label
                htmlFor="images"
                className="aspect-square cursor-pointer overflow-hidden rounded-md bg-background flex items-center justify-center"
              >
                <div className="text-muted-foreground">
                  <Image className="h-12 w-12 mx-auto" />
                  <p className="text-sm text-center mt-2">Upload a image</p>
                </div>
              </label>
            </>
          )}

          <div className="relative w-full  gap-2">
            <div className="text-center text-xs text-muted-foreground">
              Image {current} of {images.length}
            </div>

            <Input
              onChange={handleFile}
              className="sr-only w-0"
              id="images"
              name="images"
              type="file"
              accept="image/*"
              multiple={true}
            />
            <Label
              htmlFor="images"
              className="bg-input/30 mt-3 flex-1 border line-clamp-1 rounded-lg block text-center py-2 px-4 text-sm hover:bg-input/50 duration-300 cursor-pointer"
            >
              Upload image
            </Label>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductImageUpload;
