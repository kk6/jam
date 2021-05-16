from datetime import timedelta
from django.db import models


class Video(models.Model):
    id = models.CharField(verbose_name="動画ID", primary_key=True, max_length=100)
    title = models.CharField(verbose_name="タイトル", max_length=255)
    tab = models.CharField(verbose_name="TAB", max_length=255, null=True, blank=True)
    has_solo = models.BooleanField(verbose_name="ソロ？", default=False)
    solo_start_seconds = models.IntegerField(
        verbose_name="ソロ開始秒", null=True, blank=True
    )
    posted_at = models.DateField(verbose_name="投稿日", null=True, blank=True)
    title_on_youtube = models.CharField(
        verbose_name="YouTube上のタイトル", max_length=255, null=True, blank=True
    )
    scale = models.CharField(verbose_name="スケール", max_length=50, null=True, blank=True)
    key = models.CharField(verbose_name="キー", max_length=10, null=True, blank=True)
    chord_progression = models.TextField(verbose_name="コード進行", null=True, blank=True)
    description = models.TextField(verbose_name="説明文", null=True, blank=True)
    thumbnail = models.ImageField(
        verbose_name="サムネイル", upload_to="thumbnails/", null=True, blank=True
    )

    class Meta:
        db_table = "videos"
        ordering = ["-posted_at"]

    def __str__(self):
        return self.title

    @property
    def solo_start_time(self):
        return str(timedelta(seconds=self.solo_start_seconds))[-5:]
