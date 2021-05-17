from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportMixin
from import_export.formats import base_formats
from .models import Video


class VideoResource(resources.ModelResource):
    class Meta:
        model = Video


@admin.register(Video)
class VideoAdmin(ImportExportMixin, admin.ModelAdmin):
    list_display = ("id", "title", "posted_at")
    list_display_links = ("title",)

    # For django-import-export
    resource_class = VideoResource
    formats = [base_formats.CSV]
