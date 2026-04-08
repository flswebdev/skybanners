import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: [
          "image/jpeg",
          "image/png",
          "image/gif",
          "image/webp",
          "application/pdf",
          "application/postscript", // .eps, .ai
          "image/svg+xml",
          "application/vnd.ms-powerpoint",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
        maximumSizeInBytes: 52_428_800, // 50MB
        tokenPayload: JSON.stringify({ uploadedAt: Date.now() }),
      }),
      onUploadCompleted: async ({ blob }) => {
        console.log("Upload complete:", blob.url);
      },
    });
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
