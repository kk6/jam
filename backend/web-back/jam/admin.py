from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportMixin
from .models import Video


class VideoResource(resources.ModelResource):
    class Meta:
        model = Video


@admin.register(Video)
class VideoAdmin(ImportExportMixin, admin.ModelAdmin):
    list_display = ("id", "title", "posted_at")
    list_display_links = ("title",)
    resource_class = VideoResource
