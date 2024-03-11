import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  @Cron('10 * * * * *')
  async handleUnusedFile() {
    const paths = [
      './public/uploads/administration',
      './public/uploads/certificate',
      './public/uploads/service-record',
      './public/uploads/retirement',
      './public/uploads/letter',
    ];

    const filenamesFromDB = await this.prisma.file.findMany({
      select: {
        path: true,
      },
    });

    const filenamesInFolders = this.getFilenamesFromFolders(paths);

    filenamesInFolders.forEach(async (filename) => {
      if (!filenamesFromDB.find((dbFile) => dbFile.path === filename)) {
        fs.unlinkSync(filename);
      }
    });
  }

  getFilenamesFromFolders(folderPaths: string[]): string[] {
    let allFilenames: string[] = [];
    folderPaths.forEach((folderPath) => {
      try {
        // Check if the folder exists
        if (fs.existsSync(folderPath)) {
          const filenames = fs
            .readdirSync(folderPath)
            .map((filename) => path.join(folderPath, filename));
          allFilenames = allFilenames.concat(filenames);
        }
      } catch (err) {
        console.error(`Error reading folder: ${folderPath}`, err);
      }
    });
    return allFilenames;
  }
}
